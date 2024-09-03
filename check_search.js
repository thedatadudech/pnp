const algoliasearch = require("algoliasearch");

fetch("https://dashboard.algolia.com/sample_datasets/movie.json")
  .then((data) => data.json())
  .then((records) => {
    const client = algoliasearch(
      "5P7KNM1KJG",
      "9dfa62bb7cff4175e87565734a409ee9",
    );

    const index = client.initIndex("your_index_name");

    index.saveObjects(records, { autoGenerateObjectIDIfNotExist: true });
  })
  .catch((error) => {
    console.error(error);
  });
