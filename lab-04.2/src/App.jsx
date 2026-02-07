import AddArticle from './AddArticle';
import ArticleManager from "./ArticleManager";
import ArticleList from './ArticleList'; 

function App() {
  return (
    <ArticleManager
      addArticle={(props) => <AddArticle {...props} />}
      articleList={(props) => <ArticleList {...props} />}
    />
  );
}

export default App;
