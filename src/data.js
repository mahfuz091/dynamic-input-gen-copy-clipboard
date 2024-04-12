const handleData = (itemStates) => {
  return `<p>${itemStates.Title}</p>
      <p>
        Here’s a link if you wish to view the
        <a href='${itemStates.Doc}'>${itemStates.Description} Documentation</a>
      </p>`;
};

export default handleData;
