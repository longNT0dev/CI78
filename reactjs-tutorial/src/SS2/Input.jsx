function Input({ setList }) {
  console.log("Hàm truyền vào nè", setList);
  return <input type="text" placeholder="Enter your task here" />;
}

export default Input;

// Viết 1 hàm xử lí, khi người dùng bấm enter 
// sẽ lấy giá trị trong ô input thêm vào job list