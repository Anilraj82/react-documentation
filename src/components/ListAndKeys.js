import React from "react";

export class ListAndKeys extends React.Component {
    render(){
        return(
            <div>
                <h1>Lists and Keys</h1>
                <NumberList numbers={numbers} />
                <Blog posts={posts} />
            </div>
        )
    }
}

const numbers = [1, 2, 3, 4, 5];


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li> );
    const listItem1 = numbers.map((number, i) => <li key={i}>{number}</li> ); // not recommended method
    const listItem2 = numbers.map((number) => <li key={number.id}>{number}</li> );



    return (
        <div>
            {console.log("TOString is : ", listItems)}
            {console.log("I is :", listItem1)}
            {console.log("ID is :", listItem2)}

            <ul>{listItems}</ul>

        </div>

    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function Blog(props) {
    const sidebar = ( <ul> {props.posts.map((post) => <li key={post.id}>  {post.title} </li> )} </ul> );
    const content = props.posts.map((post) => <div key={post.id}> <h3>{post.title}</h3> <p>{post.content}</p> </div> );
    // const content = posts.map((post) => <Post key={post.id} id={post.id} title={post.title} /> );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}
