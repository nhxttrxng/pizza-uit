import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const ListMenu = () => {
    const navigate = useNavigate();
    const [foods, setFoods] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [editingFood, setEditingFood] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem("USERLOGIN");
        if (!user) {
            navigate("/admin");
        } else {
            fetchFoods();
        }
    }, [navigate]);

    const fetchFoods = async () => {
        try {
            const response = await axios.get("https://6676e804145714a1bd732604.mockapi.io/pizza");
            setFoods(response.data);
        } catch (error) {
            console.error("Error fetching foods:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://6676e804145714a1bd732604.mockapi.io/pizza/${id}`);
            setFoods((prevFoods) => prevFoods.filter((food) => food.id !== id));
            alert("Xoá Thành Công");
        } catch (error) {
            console.error("Lỗi khi xoá:", error);
        }
    };

    const handleEdit = (food) => {
        setEditingFood(food);
        formik.setValues(food);
    };

    const formik = useFormik({
        initialValues: {
            nameFood: "",
            description: "",
            type: "",
            image: "",
            price: "",
            percentSale: "",
        },
        validationSchema: Yup.object({
            nameFood: Yup.string().required("Vui lòng nhập Tên Món"),
            description: Yup.string().required("Vui lòng nhập Mô Tả Món"),
            type: Yup.string().required("Vui lòng chọn Loại").oneOf(["Pizza Gà", "Pizza Hải sản", "Pizza Xúc xích", "Pizza Bò băm", "Pizza Phô mai", "Pizza Hawaii", "Pizza Chay"], "Loại không hợp lệ"),
            image: Yup.string().required("Vui lòng cho hình ảnh"),
            price: Yup.number().required("Vui lòng nhập Giá tiền").positive("Giá tiền phải là số dương"),
            percentSale: Yup.number().required("Vui lòng nhập Phần trăm Sale").min(0, "Phần trăm Sale không hợp lệ").max(100, "Phần trăm Sale không hợp lệ"),
        }),
        onSubmit: async (values) => {
            try {
                if (editingFood) {
                    const res = await axios.put(`https://6676e804145714a1bd732604.mockapi.io/pizza/${editingFood.id}`, values);
                    if (res.status === 200) {
                        alert("Cập Nhật Thành Công");
                        setEditingFood(null);
                        formik.resetForm();
                    }
                } else {
                    const res = await axios.post("https://6676e804145714a1bd732604.mockapi.io/pizza", values);
                    if (res.status === 201) {
                        alert("Thêm Thành Công");
                        formik.resetForm();
                    }
                }
                fetchFoods();
            } catch (error) {
                console.error("Lỗi khi gửi dữ liệu:", error.message);
                alert("Thao tác không thành công. Vui lòng thử lại sau.");
            }
        },
    });

    const filteredFoods = foods.filter((food) =>
        food && food.nameFood.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="list-menu">
            <h2>Danh sách Menu</h2>
            <div className="list-menu-search">
                <input
                    type="text"
                    placeholder="Tìm kiếm món ăn..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <i className="fas fa-search"></i>
            </div>
            <form onSubmit={formik.handleSubmit} className="list-menu-input">
                <div className="list-menu-input_form">
                    <label>Tên Món:</label>
                    <input type="text" name="nameFood" value={formik.values.nameFood} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.nameFood && formik.errors.nameFood ? <div className="list-menu-input_form_error">{formik.errors.nameFood}</div> : null}
                </div>
                <div className="list-menu-input_form">
                    <label>Mô Tả Món:</label>
                    <input type="text" name="description" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.description && formik.errors.description ? <div className="list-menu-input_form_error">{formik.errors.description}</div> : null}
                </div>
                <div className="list-menu-input_form">
                    <label>Loại:</label>
                    <select name="type" value={formik.values.type} onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.type && formik.errors.type ? "error" : ""}>
                        <option value="">Chọn loại</option>
                        <option value="Pizza Gà">Pizza Gà</option>
                        <option value="Pizza Hải sản">Pizza Hải sản</option>
                        <option value="Pizza Xúc xích">Pizza Xúc xích</option>
                        <option value="Pizza Bò băm">Pizza Bò băm</option>
                        <option value="Pizza Phô mai">Pizza Phô mai</option>
                        <option value="Pizza Hawaii">Pizza Hawaii</option>
                        <option value="Pizza Chay">Pizza Chay</option>
                    </select>
                    {formik.touched.type && formik.errors.type ? <div className="list-menu-input_form_error">{formik.errors.type}</div> : null}
                </div>
                <div className="list-menu-input_form">
                    <label>Hình ảnh:</label>
                    <input type="text" name="image" value={formik.values.image} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.image && formik.errors.image ? <div className="list-menu-input_form_error">{formik.errors.image}</div> : null}
                </div>
                <div className="list-menu-input_form">
                    <label>Giá tiền:</label>
                    <input type="text" name="price" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.price && formik.errors.price ? <div className="list-menu-input_form_error">{formik.errors.price}</div> : null}
                </div>
                <div className="list-menu-input_form">
                    <label>Phần trăm Sale:</label>
                    <input type="text" name="percentSale" value={formik.values.percentSale} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.percentSale && formik.errors.percentSale ? <div className="list-menu-input_form_error">{formik.errors.percentSale}</div> : null}
                </div>
                <button className="button-add" type="submit">
                    {editingFood ? "Cập Nhật" : "Thêm"}
                </button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên Món</th>
                        <th>Mô Tả Món</th>
                        <th>Loại</th>
                        <th>Hình ảnh</th>
                        <th>Giá tiền</th>
                        <th>Phần trăm Sale</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredFoods.map((food) => (
                        food && ( // Check if food is valid before rendering
                            <tr key={food.id}>
                                <td>{food.id}</td>
                                <td>{food.nameFood}</td>
                                <td>{food.description}</td>
                                <td>{food.type}</td>
                                <td>{food.image && <img src={food.image} alt={food.nameFood} width="50" />}</td>
                                <td>{food.price}</td>
                                <td>{food.percentSale}</td>
                                <td>
                                    <button className="button-edit" onClick={() => handleEdit(food)}>
                                        Sửa
                                    </button>
                                    <button className="button-delete" onClick={() => handleDelete(food.id)}>
                                        Xoá
                                    </button>
                                </td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListMenu;
