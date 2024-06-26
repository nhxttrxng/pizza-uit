import React from "react";
import axios from "axios";
import HeadLine from "../../component/Headline/Headline";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const Table = () => {
    const formik = useFormik({
        initialValues: {
            fullname: "",
            date: "",
            number: "",
            phone: "",
            address: "",
            time: "",
            status: "Chưa nhận"
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Họ và tên là bắt buộc"),
            date: Yup.date().required("Ngày đặt bàn là bắt buộc").min(new Date(), "Ngày đặt bàn không hợp lệ"),
            address: Yup.string().required("Chi nhánh đặt bàn là bắt buộc"),
            number: Yup.string().required("Số người là bắt buộc"),
            phone: Yup.string()
                .required("Số điện thoại là bắt buộc")
                .matches(/^\d{10}$/, "Số điện thoại phải có 10 chữ số"),
            time: Yup.string().required("Thời gian đặt bàn là bắt buộc"),
        }),
        onSubmit: async (values) => {
            console.log(values);
            try {
                const res = await axios.post("https://6676e804145714a1bd732604.mockapi.io/user", values);
                if (res.status === 201) {
                    alert("Đặt bàn thành công");
                    formik.resetForm();
                }
            } catch (error) {
                console.error("Lỗi khi gửi dữ liệu:", error.message);
                alert("Đặt bàn không thành công. Vui lòng thử lại sau.");
            }
        },
    });

    const generateTimeOptions = () => {
        const startTime = 8 * 60;
        const endTime = 21.5 * 60;
        const step = 30;
        let times = [];
        for (let i = startTime; i <= endTime; i += step) {
            const hours = Math.floor(i / 60);
            const minutes = i % 60;
            const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
            times.push(formattedTime);
        }
        return times;
    };

    const timeOptions = generateTimeOptions();

    return (
        <div className="table">
            <HeadLine headline={"ĐẶT BÀN"} />
            <div className="table-title">
                <Container>
                    <h3>Liên hệ để đặt bàn</h3>
                    <div className="table-address">
                        <div className="address-item">
                            <i className="fa-solid fa-store"></i>
                            <a href="https://maps.app.goo.gl/nrkt2d6zmcjmbWz69" target="_blank" rel="noopener noreferrer">
                                CN1-Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Hồ Chí Minh
                            </a>
                        </div>
                        <div className="address-item">
                            <i className="fa-solid fa-store"></i>
                            <a href="https://maps.app.goo.gl/c1PRpMbWsL6FYqfS7" target="_blank" rel="noopener noreferrer">
                                CN2-Đường Nguyễn Bỉnh Khiêm, Bến Nghé, Quận 1, Hồ Chí Minh
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
            <h2>Thông tin đặt bàn</h2>
            <form onSubmit={formik.handleSubmit} className="table-form">
                <div className="table-form_input">
                    <label htmlFor="fullname">Họ và tên:</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.fullname && formik.errors.fullname ? (
                        <div className="error">{formik.errors.fullname}</div>
                    ) : null}
                </div>
                <div className="table-form_input">
                    <label htmlFor="date">Ngày đặt bàn:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.date && formik.errors.date ? (
                        <div className="error">{formik.errors.date}</div>
                    ) : null}
                </div>
                <div className="table-form_input">
                    <label htmlFor="number">Số lượng khách:</label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.number && formik.errors.number ? (
                        <div className="error">{formik.errors.number}</div>
                    ) : null}
                </div>
                <div className="table-form_input">
                    <label htmlFor="phone">Số điện thoại:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className="error">{formik.errors.phone}</div>
                    ) : null}
                </div>
                <div className="table-form_option">
                    <label htmlFor="address">Chi nhánh:</label>
                    <select
                        id="address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                    >
                        <option value="">-- Chọn chi nhánh --</option>
                        <option value="CN1">CN1 - Đường Hàn Thuyên, khu phố 6, Tp.Thủ Đức, Hồ Chí Minh</option>
                        <option value="CN2">CN2 - Đường Nguyễn Bỉnh Khiêm, Bến Nghé, Quận 1, Hồ Chí Minh</option>
                    </select>
                    {formik.touched.address && formik.errors.address ? (
                        <div className="error">{formik.errors.address}</div>
                    ) : null}
                </div>
                <div className="table-form_option">
                    <label htmlFor="time">Thời gian:</label>
                    <select
                        id="time"
                        name="time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                    >
                        <option value="">-- Chọn thời gian --</option>
                        {timeOptions.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    {formik.touched.time && formik.errors.time ? (
                        <div className="error">{formik.errors.time}</div>
                    ) : null}
                </div>
                <button type="submit">Đặt bàn</button>
            </form>
        </div>
    );
};

export default Table;
