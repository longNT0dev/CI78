function Footer({list}) {
  return (
    <div style={{backgroundColor: 'red', color: 'blue' }}>
      <span>{list.length} tabs left</span>
      <span>Mindx todolist</span>
    </div>
  );
}

export default Footer;
