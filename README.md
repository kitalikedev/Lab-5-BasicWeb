# Lab 5 - Phần 1: Blog tĩnh với Next.js Pages Router

Bài thực hành Lab 5 của khóa "The Web Basic": xây blog tĩnh từ các file Markdown bằng Next.js Pages Router và Static Site Generation (SSG). Toàn bộ trang được dựng sẵn thành HTML lúc build.

Phần 2 của bài (dashboard hóa đơn với App Router) nằm ở repo riêng: https://github.com/kitalikedev/Lab-5-Basic-Web-Part-2

## Nội dung thực hiện

- Khởi tạo project bằng `create-next-app` (Pages Router).
- Bài viết viết bằng Markdown trong thư mục `posts/`, mỗi file có front-matter `title` và `date`.
- `lib/posts.js` đọc file bằng `fs`, tách front-matter bằng `gray-matter`, đổi Markdown sang HTML bằng `remark` và `remark-html`, sắp xếp bài mới nhất trước.
- Trang chủ lấy danh sách bài bằng `getStaticProps`.
- Trang bài viết `pages/posts/[id].js` dùng `getStaticPaths` (`fallback: false`) và `getStaticProps`.
- Component `Layout` kèm CSS Modules, component `Date` dùng `date-fns`, điều hướng bằng `next/link`.
- `next.config.mjs` đặt `output: 'export'` và `images.unoptimized: true` để xuất ra thư mục `out/`.

## Công nghệ

- Next.js 16 (Pages Router), React 19
- gray-matter, remark, remark-html, date-fns
- CSS Modules

## Yêu cầu

Node.js từ 20.9 trở lên.

## Chạy dự án

Project nằm trong thư mục `nextjs-blog`.

```bash
cd nextjs-blog
npm install
npm run dev
```

Mở `http://localhost:3000`.

## Build tĩnh

```bash
npm run build
```

Kết quả nằm trong thư mục `nextjs-blog/out/`, gồm `index.html` và `posts/*.html`. Có thể đưa thư mục này lên GitHub Pages, Netlify hoặc Cloudflare Pages. Repo này chưa được triển khai.

## Cấu trúc

```
nextjs-blog/
  components/     layout, date và CSS Modules
  lib/posts.js    đọc và xử lý bài viết
  pages/
    index.js      trang chủ
    posts/[id].js trang bài viết
    _app.js       import CSS toàn cục
  posts/          các bài viết Markdown
  styles/         CSS toàn cục
  next.config.mjs cấu hình xuất file tĩnh
```

## Ghi chú

- Thư mục `pages/api` đã được xóa vì API Routes không dùng được khi xuất tĩnh với `output: 'export'`.
- Thêm bài viết mới bằng cách tạo file `.md` trong `posts/` rồi build lại.
