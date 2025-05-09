# 🖱️ NetClick

**NetClick** is a frontend showcase project built with **React**, designed to consolidate and demonstrate core frontend development skills. It simulates a high-performance keyword search and display system capable of handling over **1 million records**, focusing on scalability, performance, and clean UI/UX principles.

## 🚀 Features

- ⚛️ **React + Context API**  
  Centralized and scalable state management for consistent behavior across components.

- 🛠️ **Custom Hooks**  
  - `useFetch`: Encapsulates data-fetching logic with loading and error states.  
  - `useDebounce`: Optimizes keyword input to reduce redundant API calls and improve performance.

- 🧠 **Search Optimization**  
  Highly efficient keyword search system capable of handling large-scale datasets with minimal performance cost.

- 🐢 **Lazy Loading**  
  Applies to components and images to speed up initial load and improve perceived performance.

- 🖼️ **Image Handling (UX-focused)**  
  - Graceful handling of broken or delayed images  
  - Optimized layout shift prevention for better visual stability

- 🎨 **Responsive UI**  
  Designed with **Tailwind CSS** and **Ant Design**, ensuring a modern and consistent interface across all screen sizes.

## 📦 Tech Stack

- **React** (with hooks)
- **Context API** for state management
- **Tailwind CSS** + **Ant Design (AntD)**
- **Custom Hooks** (`useFetch`, `useDebounce`)
- **Lazy loading** via `React.lazy` and `Suspense`
- **Performance Optimization** strategies for large datasets

## 📁 Project Structure (Example)
![](https://res.cloudinary.com/dctb1eocj/image/upload/v1746827925/netclick/struct_l8zlua.jpg)
## 📦 Docker Support

- Containerize the NetClick app using Docker for consistent deployment across environments.
## 🛠️ Setup

```bash
docker pull patrickdevcoffee/netclick 
docker run -p 5173:5173 --rm -it -d patrickdevcoffee/netclick
```
### Screenshots

|![](https://res.cloudinary.com/dctb1eocj/image/upload/v1746827924/netclick/1_k8xvt7.jpg)                                |                                                                        ![](https://res.cloudinary.com/dctb1eocj/image/upload/v1746827924/netclick/2_en4wbd.jpg)       |
| :--------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------ |
| ![](https://res.cloudinary.com/dctb1eocj/image/upload/v1746827924/netclick/5_uj9dc0.jpg) | ![](https://res.cloudinary.com/dctb1eocj/image/upload/v1746827924/netclick/3_xg8rzu.jpg) |
| ![](https://res.cloudinary.com/dctb1eocj/image/upload/v1746827925/netclick/7_qk8ewm.jpg)     | ![](https://res.cloudinary.com/dctb1eocj/image/upload/v1746827924/netclick/4_akmflt.jpg) |
