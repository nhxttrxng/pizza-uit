import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageTable = () => {
    const [people, setPeople] = useState([]);
    const [editingPerson, setEditingPerson] = useState(null); // New state for editing person
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem("USERLOGIN");
        if (!user) {
            navigate("/admin");
        } else {
            fetchTable();
        }
    }, [navigate]);

    const fetchTable = async () => {
        try {
            const response = await fetch("https://6676e804145714a1bd732604.mockapi.io/user");
            const data = await response.json();
            setPeople(data);
        } catch (error) {
            console.error("Error fetching table:", error);
        }
    };

    const handleCancel = async (id) => {
        try {
            const response = await fetch(`https://6676e804145714a1bd732604.mockapi.io/user/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...editingPerson, status: "Đã huỷ" }),
            });
            if (response.ok) {
                alert("Huỷ phiếu đặt bàn thành công");
                fetchTable();
            } else {
                throw new Error("Huỷ không thành công");
            }
        } catch (error) {
            console.error("Lỗi khi huỷ phiếu đặt bàn:", error);
            alert("Thao tác không thành công. Vui lòng thử lại sau.");
        }
    };

    const handleConfirm = async (id) => {
        try {
            const response = await fetch(`https://6676e804145714a1bd732604.mockapi.io/user/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...editingPerson, status: "Đã nhận" }),
            });
            if (response.ok) {
                alert("Xác nhận phiếu đặt bàn thành công");
                fetchTable();
            } else {
                throw new Error("Xác nhận không thành công");
            }
        } catch (error) {
            console.error("Lỗi khi xác nhận phiếu đặt bàn:", error);
            alert("Thao tác không thành công. Vui lòng thử lại sau.");
        }
    };

    const handleEdit = (person) => {
        setEditingPerson(person);
    };

    const handleCancelEdit = () => {
        setEditingPerson(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditingPerson((prevPerson) => ({
            ...prevPerson,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://6676e804145714a1bd732604.mockapi.io/user/${editingPerson.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(editingPerson),
            });
            if (response.ok) {
                alert("Cập nhật thành công");
                setEditingPerson(null);
                fetchTable();
            } else {
                throw new Error("Cập nhật không thành công");
            }
        } catch (error) {
            console.error("Lỗi khi cập nhật:", error);
            alert("Thao tác không thành công. Vui lòng thử lại sau.");
        }
    };

    return (
        <div className="manage-table">
            {editingPerson ? (
                <form onSubmit={handleUpdate} className="manage-table-input">
                    <div className="manage-table-input_form">
                        <label>Họ và tên:</label>
                        <input
                            type="text"
                            name="fullname"
                            value={editingPerson.fullname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="manage-table-input_form">
                        <label>Ngày đặt bàn:</label>
                        <input
                            type="text"
                            name="date"
                            value={editingPerson.date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="manage-table-input_form">
                        <label>Số lượng khách:</label>
                        <input
                            type="text"
                            name="number"
                            value={editingPerson.number}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="manage-table-input_form">
                        <label>Số điện thoại:</label>
                        <input
                            type="text"
                            name="phone"
                            value={editingPerson.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="manage-table-input_form">
                        <label>Chi nhánh:</label>
                        <select
                            name="address"
                            value={editingPerson.address}
                            onChange={handleInputChange}
                        >
                            <option value="">-- Chọn chi nhánh --</option>
                            <option value="CN1">CN1 - Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Hồ Chí Minh</option>
                            <option value="CN2">CN2 - Đường Nguyễn Bỉnh Khiêm, Bến Nghé, Quận 1, Hồ Chí Minh</option>
                        </select>
                    </div>
                    <div className="manage-table-input_form">
                        <label>Thời gian:</label>
                        <select
                            name="time"
                            value={editingPerson.time}
                            onChange={handleInputChange}
                        >
                            <option value="">-- Chọn thời gian --</option>
                        </select>
                    </div>
                    <div>
                        <button className="button-edit" type="submit">
                            Cập Nhật
                        </button>
                        <button className="button-canceledit" onClick={handleCancelEdit}>
                            Hủy
                        </button>
                    </div>
                </form>
            ) : null}

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Họ và tên</th>
                        <th>Ngày đặt bàn</th>
                        <th>Số lượng khách</th>
                        <th>Số điện thoại</th>
                        <th>Chi nhánh</th>
                        <th>Thời gian</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((person) => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.fullname}</td>
                            <td>{person.date}</td>
                            <td>{person.number}</td>
                            <td>{person.phone}</td>
                            <td>{person.address}</td>
                            <td>{person.time}</td>
                            <td>{person.status}</td>
                            <td>
                                {person.status === "Chưa nhận" && (
                                    <>
                                        <button className="button-cancel" onClick={() => handleCancel(person.id)}>
                                            Huỷ
                                        </button>
                                        <button className="button-edit" onClick={() => handleEdit(person)}>
                                            Sửa
                                        </button>
                                        <button className="button-confirm" onClick={() => handleConfirm(person.id)}>
                                            Xác Nhận
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageTable;
