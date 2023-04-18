let idToDelete = 3

let notesStore = [
    {
        id: 1,
        text: "some text 1",
        status: "delete"
    },
    {
        id: 2,
        text: "some text 1",
    },
    {
        id: 3,
        text: "some text 1",
    },
    {
        id: 4,
        text: "some text 1",
    }
]

notesStore = notesStore.filter((note) => {
    if (note.id != idToDelete && note.status != "delete"){
        return note
    }
})

console.log(notesStore)