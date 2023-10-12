import React from 'react';
import './ErrorPage.css'; // Tạo một file CSS riêng để tùy chỉnh giao diện

const ErrorPage = () => {
    return (
        <div className="error-container">
            <h1>Oops! Something went wrong</h1>
            <p>We're sorry, but it seems there was an error processing your request.</p>
            <p>Please try again later or <a href="/">return to the homepage</a>.</p>
            <button className="back-button" onClick={() => window.location.href = '/'}>Quay lại trang chủ</button>
        </div>
    );
};

export default ErrorPage;
