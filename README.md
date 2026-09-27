# ✨ QR-WEB: Đêm Sao Băng & Bộ Tạo Mã QR Nghệ Thuật

Dự án kết hợp giữa **trải nghiệm thị giác tương tác vũ trụ sao băng** và **công cụ thiết kế mã QR Code nghệ thuật** độc đáo, được xây dựng hoàn toàn bằng công nghệ web thuần (Vanilla HTML5, CSS3, JavaScript).

---

## 🌟 1. Tổng quan dự án

Dự án được xây dựng với ý tưởng kịch bản:
1. **Người dùng quét mã QR** (được in trên quà tặng, bưu thiếp, thiệp chúc mừng, sự kiện...) và được đưa tới trang web **Đêm Sao Băng** ([index.html](index.html)).
2. **Trải nghiệm không gian huyền diệu**: Người dùng ngắm sao băng rơi, gửi gắm điều ước, kích hoạt mưa sao băng và tương tác với các vì sao.
3. **Công cụ tạo mã QR tùy biến** ([generate-qr.html](generate-qr.html)): Giúp bất kỳ ai cũng có thể tự tạo mã QR mang phong cách riêng với các điểm ảnh hình trái tim, ngôi sao, giọt nước,... kết hợp dải màu gradient bắt mắt để in ấn hoặc chia sẻ.

---

## 🚀 2. Các tính năng nổi bật

### 🌌 A. Trang Đêm Sao Băng (`index.html`)
- **Bầu trời sao thời gian thực**: Tự động tính toán mật độ màn hình để vẽ tới 250 vì sao với kích thước, độ sáng và chu kỳ nhấp nháy ngẫu nhiên.
- **Sao băng chân thực**: Vệt sao bay chéo góc với 2 lớp hào quang gradient và hiệu ứng làm mờ (blur).
- **Đám mây tinh vân (Nebula)**: Hiệu ứng thị sai (Parallax) trôi dạt nhẹ nhàng theo chuyển động của con trỏ chuột.
- **Vệt sáng tương tác (Cursor Trail)**: Tạo dải bụi sao lấp lánh phát sáng khi di chuột, chạm màn hình cảm ứng hoặc click bất kỳ điểm nào.
- **Tính năng tương tác phong phú**:
  - 🌠 **Gửi điều ước lên sao**: Mở popup điều ước kèm theo một đợt mưa sao băng chào mừng.
  - 🚀 **Mưa sao băng (Meteor Shower)**: Kích hoạt liên tiếp 15 vệt sao băng bay qua bầu trời.
  - ⏱️ **Tùy chỉnh tốc độ**: Chuyển đổi 3 mức tốc độ bay (Nhanh - Chậm - Bình thường).
  - ☀️ / 🌙 **Tùy chỉnh Sáng / Tối nền (Brightness Modes)**:
    - 🌙 *Nền tối (Dark Mode - Bầu trời đêm sâu thẳm)*
    - 🌓 *Nền tối vừa (Dim Mode - Chiều tà dịu êm)*
    - ☀️ *Nền sáng (Light Mode - Bình minh mộng mơ sắc nét)*
    - Tự động lưu lựa chọn vào `localStorage`.
  - 🎨 **Đổi tông màu vũ trụ (Theme)**: 3 tông màu không gian sống động:
    - *Vũ trụ tím* (Cosmic Purple - Mặc định)
    - *Bắc cực quang* (Aurora Green)
    - *Hoàng hôn* (Sunset Red-Orange)
  - 🌓 **Đổi giao diện Sáng / Tối toàn diện**: Hỗ trợ trên cả trang chính và trang tạo QR ([generate-qr.html](generate-qr.html)).
- **Tương thích toàn diện**: Tối ưu hiển thị mượt mà trên cả máy tính, máy tính bảng và điện thoại.

---

### 🔲 B. Bộ Tạo Mã QR Nghệ Thuật (`generate-qr.html`)
- **Mức độ sửa lỗi cao (Error Correction Level H)**: Cho phép mã QR vẫn quét được chính xác ngay cả khi điểm ảnh bị biến tấu thành hình nghệ thuật.
- **10 kiểu hình dáng tổng thể mã QR (QR Shape / Frame)**:
  - 💖 **Hình trái tim (Heart)**: Thiết kế lãng mạn, viền kép và trang trí mini-heart.
  - 🔴 **Hình tròn (Circle)**: Vòng tròn hoàn hảo với viền đôi sang trọng.
  - 💎 **Kim cương (Diamond)**: Khung đa giác góc cạnh nổi bật.
  - ⬡ **Lục giác (Hexagon)**: Phong cách công nghệ hiện đại.
  - 🛡️ **Huy hiệu (Badge/Shield)**: Kiểu dáng thẻ chứng nhận uy tín.
  - 🏷️ **Scan Me Banner**: Kèm nhãn nút "📷 SCAN ME ✨" phía dưới.
  - 🌸 **Cánh hoa (Flower)**: Khung viền 12 cánh hoa mềm mại.
  - ⭐ **Ngôi sao (Star)**: Khung ngôi sao 8 cánh lấp lánh.
  - 🔲 **Bo mềm (Squircle)** & ⏹️ **Vuông (Square)**.
- **Tạo hình khối các chấm QR (Matrix Shape Masking - Mới)**:
  - 💖 **Khối theo hình (Shape Contour)**: Các chấm dữ liệu QR tự động uốn lượn và điêu khắc thành hình trái tim, ngôi sao, cánh hoa,... không bị lòi góc hay rơi ra ngoài khung.
  - ⏹️ **Khối vuông nguyên bản**: Giữ ma trận khối vuông truyền thống nằm gọn gàng bên trong khung viền.
  - Bảo toàn 100% 3 góc định vị (Finder Patterns) và đường định thời giúp camera điện thoại quét mã nhạy và chính xác.
- **Biểu tượng trung tâm (Center Icon / Logo)**: Tùy chọn đặt logo/emoji ở giữa mã QR (❤️ Trái tim, ⭐ Ngôi sao, ✨ Lấp lánh, 🚀 Vũ trụ, 🎁 Quà tặng, 🎵 Âm nhạc, 🔥 Hot).
- **15 kiểu hình dạng điểm dữ liệu (Dot Shapes)**:
  - Hình vuông, hình tròn, bo tròn góc, hình kim cương.
  - Hình **trái tim (♥)**, **ngôi sao (★ & ✦)**, **hoa (✿)**, **mặt trăng (☽)**.
  - Hình giọt nước, lá cây, chữ thập, mũi tên, lục giác, tam giác.
- **4 kiểu góc định vị (Finder Pattern Corners)**: Vuông truyền thống, Tròn mềm, Bo góc, Chấm tròn.
- **10 bộ màu sắc & Gradient**: Đen, Tối, Đại dương, Hoàng hôn, Rừng xanh, Tím bí ẩn, Vàng kim, Neon, Hồng thời thượng, Bầu trời.
- **Tùy chọn nền**: Nền trắng, Nền xám nhạt hoặc Nền trong suốt (Transparent).
- **Xem trước thời gian thực (Live Preview)**: Hiển thị ngay lập tức hình dáng QR nổi bật với hiệu ứng đổ bóng.
- **Xuất file chất lượng cao**:
  - Tải về ảnh **PNG siêu nét** (nội suy kích thước 3.5x lần phục vụ in ấn).
  - Tải về file vector **SVG**.

---

## 📂 3. Cấu trúc thư mục

```text
QR_WEB/
│
├── index.html          # Trang trải nghiệm chính (Bầu trời sao băng & điều ước)
├── style.css           # Toàn bộ CSS phong cách Cosmic Dark, Glassmorphism & Animations
├── app.js              # Logic JavaScript điều khiển sao, tương tác, theme, parallax
│
├── generate-qr.html    # Trang công cụ tạo và tùy biến mã QR độc lập
└── README.md           # Tài liệu hướng dẫn dự án
```

---

## 🛠️ 4. Công nghệ sử dụng

| Công nghệ | Mô tả |
| :--- | :--- |
| **HTML5** | Cấu trúc ngữ nghĩa, Semantic layout, chuẩn Responsive Viewport. |
| **CSS3** | CSS Variables (`:root`), Glassmorphism, Flexbox & CSS Grid, Animations `@keyframes`. |
| **JavaScript (ES6+)** | DOM manipulation, Parallax logic, Canvas 2D API, Event listeners. |
| **HTML5 Canvas** | Vẽ các hình khối vector của ma trận QR trực tiếp lên canvas. |
| **qrcode-generator** | Thư viện tính toán ma trận ma hóa QR (sử dụng qua CDN jsDelivr). |
| **Google Fonts** | Bộ font hiện đại `Outfit` và `Space Grotesk`. |

---

## 💻 5. Hướng dẫn chạy dự án

Dự án là ứng dụng thuần phía máy khách (Client-side), **không cần cài đặt `Node.js` hay `npm install`**.

### Cách 1: Mở trực tiếp
Nhấp đúp chuột vào file [index.html](index.html) hoặc [generate-qr.html](generate-qr.html) để mở trực tiếp trên trình duyệt bất kỳ (Chrome, Edge, Firefox, Safari,...).

### Cách 2: Dùng VS Code Live Server (Khuyên dùng)
1. Cài đặt tiện ích mở rộng **Live Server** trong Visual Studio Code.
2. Nhấp chuột phải vào file [index.html](index.html) và chọn **Open with Live Server**.
3. Website sẽ chạy tại địa chỉ cục bộ `http://127.0.0.1:5500`.

### Cách 3: Truy cập trực tiếp qua GitHub Pages (Đã triển khai)
Dự án đã được triển khai online sẵn sàng sử dụng:
- 🌌 **Trang Đêm Sao Băng**: [https://dev-pmthang.github.io/QR-WEB/](https://dev-pmthang.github.io/QR-WEB/)
- 🔲 **Trang Tạo Mã QR Code**: [https://dev-pmthang.github.io/QR-WEB/generate-qr.html](https://dev-pmthang.github.io/QR-WEB/generate-qr.html)

---

## 💖 Tác giả & Góp ý
- Phát triển bởi: **pmthang** ([GitHub Profile](https://github.com/Dev-pmthang))
- Mọi ý kiến đóng góp hoặc đề xuất tính năng mới đều được hoan nghênh qua GitHub Issues / Pull Requests!
