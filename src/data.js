const handleData = (itemStates) => {
  console.log(itemStates);
  const font = itemStates?.Font?.split(",");
  console.log(font);
  console.log(typeof font);
  const itemsHTML = font?.map((item) => `<li>${item}</li>`).join(" ");
  console.log(itemsHTML);

  return `<p>${itemStates.Title}</p>
<p>Here’s a link if you wish to view the 
<a href='${itemStates.Doc}'>${itemStates.Description} Documentation</a>
</p>
<ul>${itemsHTML}</ul>
`;
};

export default handleData;
