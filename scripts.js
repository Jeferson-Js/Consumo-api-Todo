const list = document.querySelector("#fill_list");

const fetchApi = async (item) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);

    const data = await response.json();

    return data;
}

const renderApi = async (item) => {

    const data = await fetchApi(item)

    data.map((item) => {
        const li = document.createElement('li');
        li.setAttribute('id', item.id);
        li.innerHTML = item.title;
        list.appendChild(li)
    })
}
