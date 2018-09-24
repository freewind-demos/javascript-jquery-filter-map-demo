$(() => {
    const values = $('#table tr').find('td')
        .filter((index, td) => {
            return $(td).text().trim().length > 0
        })
        .map((index, td) => {
            return `${$(td).text().trim()}!`
        })

    console.log(values)

    $('#main').text(JSON.stringify(values.toArray()))
})
