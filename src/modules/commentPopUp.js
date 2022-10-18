const commentPopUp = document.getElementById('meal-details');
const render = () => {
  const PopUpbody = `<span id="closeBtn">X</span>
                    <div class="image-container"><img src=${1} alt=${2}></div>
                    <h2 class="meal-name">${3}</h2>
                    <p id="category">${4}</p>
                    <p class="cooking-instruction">Cooking Instructions</p>
                    <table class="ingredients-table">
                      <thead>
                        <th>SN</th>
                        <th>Ingredients</th>
                        <th>Measurement(s)</th>
                      <tbody class="tbody">
                        <tr>
                          <td>1</td>
                          <td>2</td>
                          <td>3</td>
                        </tr>
                      </tbody>
                      </thead>
                    </table>
                 <div id="links"> 
                    <a id="source" href=${12}>View Source</a>
                    <a id="youtube-link" href=${13}>Watch on youtube</a>
                 </div>`;

  return PopUpbody;
};

export { render, commentPopUp };