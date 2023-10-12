import React from 'react';
import './Success.css'; // Đảm bảo có tệp CSS tương ứng

const PaymentSuccess = () => {
  return (
    <div className="success-container">
      <div className="success-icon">&#10004;</div>
      <div className="success-text">Thanh toán thành công!</div>
      <div className="success-details">
        Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.
      </div>
      <button className="back-button" onClick={() => window.location.href = '/'}>Quay lại trang chủ</button>
    </div>
  );
};

export default PaymentSuccess;
