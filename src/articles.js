import React from 'react';
import { Route, Link } from 'react-router-dom';

const Article = ({ match }) => <p>This is the Article no. {match.params.id}</p>;

class Articles extends React.Component {
    render() {
        return (
            <div>
                <h1>Articles</h1>
                <strong>choose an article</strong>
                <ul>
                    <li>
                        <Link to="/articles/1">Article 1 </Link>
                    </li>
                    <li>
                        <Link to="/articles/2">Article 2 </Link>
                    </li>
                    <li>
                        <Link to="/articles/3">Article 3 </Link>
                    </li>
                </ul>
                <Route path="/articles/:id" component={Article} />
            </div>
        );
    }
}

export default Articles;
