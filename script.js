// JavaScript để xử lý form và sự kiện
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn reload trang
    alert("Đăng nhập thành công!");
  });
  
  document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Đặt chỗ thành công! Chúng tôi sẽ liên hệ với bạn sớm.");
  });
  