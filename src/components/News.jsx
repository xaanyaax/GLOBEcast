
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0, 
    };
  }

  async fetchNews(page) {
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=6&apiKey=a3a59d434da64b8fbd0bcb76bf291f69`;
    
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log("API Response:", parsedData);

      if (parsedData.status === "error") {
        console.error("Error fetching news:", parsedData.message);
      } else {
        this.setState({
          articles: parsedData.articles || [],
          loading: false,
          totalResults: parsedData.totalResults, 
        });
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchNews(this.state.page);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchNews(this.state.page);
    }
  }

  handlePrevClick = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  handleNextClick = () => {
    let maxPages = Math.ceil(this.state.totalResults / 6);
    if (this.state.page < maxPages) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  render() {
    return (
      <div className="container mx-auto my-6 px-4">
        <div className="flex justify-center items-center text-center space-x-4 my-5">
        <img src="https://media-hosting.imagekit.io//c670033ba33b49bc/screenshot_1742037681167.png?Expires=1836645685&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=RX0oiqWYGpTDQ1hHDJ9Vb6KnaVxNus3gimHaxJUuW1a8nd9nhOp4fwqto7cDKrYPAI~8Sx08IYEbRky8Z67p5pXv0hZU4xLLh9NcnSotpauS6fnmOflxbdeh8m6NP4-ZRAJL7FRfUWAtDkKPiYHx6xY~BYQjXW6Cyh6C-ur8vHwLVMAzfXQw7gdl-YU8~hcjQn54W3oPbiZ76eoC-uW3p0FDPhkmf94WtZa-tSvJt7b6HsLIOemhzS~K29cYoTICe-AcbypbeVEd7y~m3EAi4g~DwssiSXSeuFitxZ1fRGLk3lO38si2JjL0Q~eZpf7oHnhoJ8b83Xq7LOQvINBZcg__" alt="" className="h-15 w-15 "/>
        <h2 className="text-4xl font-bold text-center ">
          GlobeCAST - Top Headlines
        </h2>
        </div>

        {this.state.loading && <h3 className="text-center">Loading...</h3>}

        {!this.state.loading && this.state.articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {this.state.articles.map((article) => (
              <NewsItem
                key={article.url}
                title={article.title}
                description={article.description || "No description available."}
                imageUrl={article.urlToImage || "https://via.placeholder.com/150"}
                newsUrl={article.url}
              />
            ))}
          </div>
        ) : (
          !this.state.loading && <p className="text-center">No news available.</p>
        )}

        <br />

        <div className="flex justify-between">
          <button
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
            className="bg-blue-500 text-white px-4 py-2 rounded text-lg disabled:opacity-50"
          >
            &#8592; Previous
          </button>
          <button
            onClick={this.handleNextClick}
            disabled={this.state.page >= Math.ceil(this.state.totalResults / 6)}
            className="bg-blue-500 text-white px-4 py-2 rounded text-lg disabled:opacity-50"
          >
            Next &#8594;
          </button>
        </div>
      </div>
    );
  }
}

export default News;

