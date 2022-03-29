// to export data in file format

const exportTodos = () => {
    let txt = `Export Of Todos From ${window.location.hostname}\n--------------------------------------------------\n`;
    Array.from(todos).forEach((e) => {
      txt += `${e.done ? "✅" : "❌"} - ${e.todo}\n--------------------------------------------------\n`;
    })
    txt += `Made With ❤ By Mareboina Ravi Yadav`
    const element = document.createElement("a");
    const file = new Blob([txt], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "Todo.txt";
    document.body.appendChild(element)
    element.click();
  }
