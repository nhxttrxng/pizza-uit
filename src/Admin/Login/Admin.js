import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Simulate a delay to check the performance
        await new Promise((resolve) => setTimeout(resolve, 500));

        const hardCodedUser = {
            username: "22521577",
            password: "uit@22521577",
        };

        if (formData.username === hardCodedUser.username && formData.password === hardCodedUser.password) {
            alert("Đăng nhập thành công!");
            localStorage.setItem("USERLOGIN", JSON.stringify(hardCodedUser));
            navigate("/listmenu");
        } else {
            setError("Sai tài khoản hoặc mật khẩu");
        }

        setIsLoading(false);
    };

    return (
        <div className="login">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Đăng Nhập</h2>
                <div className="login-form_input">
                    <label>Tài Khoản</label>
                    <input required type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="login-form_input">
                    <label>Mật khẩu</label>
                    <input required type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                {error && <div className="login-form_errorMessage">{error}</div>}
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Đang xử lý..." : "Đăng Nhập"}
                </button>
            </form>
        </div>
    );
};

export default Admin;
