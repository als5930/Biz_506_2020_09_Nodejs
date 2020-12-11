document.addEventListener("DOMContentLoaded", function () {
  let todo = document.getElementById("todo");

  document.querySelector("#btn-save").addEventListener("click", function () {
    let todo_input = document.querySelector("input");

    todo_input = document.querySelector(
      "section.todo_main form input[name='t_text']"
    );

    let todo_value = todo_input.value;
    if (todo_value === "") {
      alert("할일은 반드시 입력하세요");
      document.querySelectorAll("input")[0].focus();
      return false;
    }
    if (confirm("저장할까요")) {
      document.getElementsByTagName("form")[0].submit();
    }
  });
});
