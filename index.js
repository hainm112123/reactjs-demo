let title = React.createElement('div', {
  className: 'title'
}, 'React Tutorial');
let image = React.createElement('img', {
  
});
let app = React.createElement('div', null, title, image);
const root = document.getElementById('root');
ReactDOM.render(app, root);