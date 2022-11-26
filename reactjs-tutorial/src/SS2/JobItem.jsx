// destructring
import "./JobItem.css";
function JobItem({ todo, toggleStatus }) {
  return (
    <li
      className={todo.status}
      onClick={() => toggleStatus(todo.id)}
    >
      {todo.value}
    </li>
  );
}

export default JobItem;

// Chỉnh sửa code để khi bấm chọn 1 cái job nào đó thì sẽ chuyển đổi qua lại giữa việc xóa cái job đó đi và nếu như job bị gạch bỏ sẽ cập nhật lại số lượng công việc còn lại phải làm trong footer
