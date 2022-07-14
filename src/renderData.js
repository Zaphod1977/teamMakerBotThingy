function renderData(employees) {
    var html = "<!DOCTYPE html><html lang = 'en' ><head><link rel='stylesheet' href='style.css'/><meta charset='UTF-8'/><title>My Team</title></head><body>"
    html += '<div><h1>MY TEAM</h1>'
    employees.forEach(card => {
        if (card.office){
            html += renderManager(card)
        }else if (card.school){
            html += renderIntern(card)
        }else if (card.gitUsername){
            html += renderEngineer(card)
        };
    });
    html += '</div></body>'
    return html
}

function renderManager(manager) {
    return '<div><h2>' + manager.name + '</h2><p>' + manager.id + '<p><p>' + manager.email + '<p><p>' + manager.office + '<p></div>'
}

function renderIntern(intern) {
    return '<div><h2>' + intern.name + '</h2><p>' + intern.id + '<p><p>' + intern.email + '<p><p>' + intern.school + '<p></div>'
}

function renderEngineer(engineer) {
    return '<div><h2>' + engineer.name + '</h2><p>' + engineer.id + '<p><p>' + engineer.email + '<p><p>' + engineer.gitUsername + '<p></div>'
}

export default renderData;
