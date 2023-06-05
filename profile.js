
$(document).ready(function () {
  fetch("http://localhost:3001/getdata")
    .then((res) => res.json())
    .then(data => {
      function createElements(parent, elementData) {
        const element = $("<" + elementData.element + ">");

        element.attr("style", elementData.style);

        if (elementData.text) {
          element.text(elementData.text);
        }

        if (elementData.src) {
          element.attr("src", elementData.src); 
        }

        if (elementData.child) {
          $.each(elementData.child, function (index, childData) {
            createElements(element, childData);
          });
        }

        parent.append(element);

      }

      const body = $("body"); 
      createElements(body, data.body);
      
    })
    .catch(err => console.log(err))
});
