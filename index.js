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
    for (let i = 0; i < parent.length; i++) {
        const a = parent[i].value;
        string += '"' + a + '"';
        if(i!==parent.length-1) {
            if (i !== 0) {
                string += ',';
            } else {
                string += ':';
            }
        }
    }
    string += "}";
    div.innerHTML = string;



}
