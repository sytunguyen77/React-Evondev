import logo from "./logo.svg";
import { YoutubeData } from "./YoutubeData";
import "./App.css";
// JSX: Javascript XML
// ES6
// Babel
// curly braces{}
function Feature() {
   return (
      <div className="feature">
         <img src="" alt="" className="feature-image" />
         <h3 class="feature-title">Title2</h3>
         <p class="feature-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores rerum aliquam quae molestias
            dolor magnam provident non facere commodi sint!
         </p>
      </div>
   );
}
// parent component
function App() {
   // const numbers = [1, 2, 3, 4, 5];
   // const double = numbers.map((item) => item * 2);
   // console.log(double);
   return (
      <div className="youtube-list">
         {YoutubeData.map((item, index) => {
            let newClass = "";
            if (index === 1) newClass = "abc";
            {
               /* const newClass = index === 1 ? "abc" : ""; */
            }
            return (
               <YoutubeItem
                  key={item.id}
                  image={item.image}
                  avatar={item.avatar || item.image}
                  title={item.title}
                  author={item.author}
                  className={newClass}
               ></YoutubeItem>
            );
         })}
      </div>
   );
}
// Props -> Properties
function YoutubeItem(props) {
   return (
      <div
         className={`youtube-item ${props.className}`}
         //  style={{
         //     height: "250px",
         //  }}
      >
         <div className="youtube-image">
            <img
               src={props.image}
               // alt=""
               // style={{
               //    display: "block",
               //    maxWidth: "100%",
               //    width: "100%",
               //    height: "100%",
               //    objectFit: "cover",
               // }}
            />
         </div>
         <div className="youtube-footer">
            <img src={props.avatar} alt="" className="youtube-avatar" />
            <div className="youtube-info">
               <h3 className="youtube-title">{props.title || "This is example of title"}</h3>
               <h4 className="youtube-author">{props.author || "This is example of author name"}</h4>
            </div>
         </div>
      </div>
   );
}
// Rendering list

export default App;
