let data;
//     {
//         quote: "Luck favors the prepared.",
//         author: "Edna Mode"
//     },
//     {
//         quote: "Follow sound business trends, not fashion trends.",
//         author: "Janice Dickinson"
//     },
//     {
//         quote: "I'm sure we, the American people, are the butt of jokes by those in power.",
//         author: "Alice Walker"
//     },
// ]

export default function QuotesView(props) {
    data = props;
    return `<div class="container">
    <h1>Incredible Quotes</h1>
<div class="card">
<div class ="card-body" id="#quotes"></div>

</div>`;

}

export function QuotesViewEvents() {
    const quotes = data.quotes
    const displayQuote = quotes;
    let html = document.querySelector("#quotes");
    for (let i = 0; i< quotes.length; i++) {
        html.innerHTML += `<h1>${quotes[i].author}:</h1> <p"${quotes[i].quotes}"</p> <br>`;
    }
}