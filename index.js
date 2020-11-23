function dob()
{
    document.getElementById('elem').insertAdjacentHTML('beforeend',' <div>\n' +
        '    <input type="text">\n' +
        '    <input type="text">\n' +
        '    <button onclick="up(this)">↑</button>\n' +
        '    <button onclick="down(this)">↓</button>\n' +
        '    <button onclick="del(this)">⨉</button>\n' +
        '    </div>')
}

function up(line)
{
    const upperElement = line.parentElement.previousElementSibling;
    if(upperElement)
        line.parentElement.after(upperElement);
}

function down(line)
{
    const bottomElement = line.parentElement.nextElementSibling;
    if(bottomElement)
        line.parentElement.before(bottomElement);
}

function del(line)
{
    line.parentElement.remove();
}

function save()
{

    const div = document.getElementById('save_zone');
    const parent = document.querySelectorAll("#elem> div> input");
    let string = "{";
    for (let i = 0; i < parent.length; i = i + 2) {
        const a = parent[i].value;
        const b = parent[i + 1].value;
        string += '"' + a + '":"' + b + '"';
        if (i !== parent.length - 2) {
            string += ',';
        }
    }
    string += "}";
    div.innerHTML = string;



}
