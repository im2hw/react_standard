import React, { useState } from "react";
import './App.css';

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];

  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState(""); // input을 위한 value

  const handleForEach = function () {
    let temp = "";
    array.forEach(function (val, index) {
      temp += `${index} : ${val} / `;
    });
    setResult(temp);
  };

  const handleFilter = function () {
    const filtered = array.filter(function(item, index){
      return item.includes(query);
  })
  setResult(filtered.join(", "));
};

const handleMap = function () {
  const mapped = array.map(function(item, index){
    return item.toUpperCase();
  })
  setResult(mapped.join(", "));
}

const handleReduce = function(){
 const reduced = array.reduce(function(acc, cur){
   return `${acc} + ${cur}`;
 })
 setResult(reduced);
};

const handlePush = function(){
const newArr = [...array, query];
setArray(newArr);
setResult(newArr.join(", "));
};
 
const handlePop = function(){
  const newArr = [...array];
  newArr.pop();
setArray(newArr);
setResult(newArr.join(', '));
}

const handleSlice = function(){
  const sliced = array.slice(1,3);
  setArray(sliced);
  setResult(sliced.join(', '));
}

const handleSplice = function(){
  const spliced = [...array];
  spliced.splice(1, 2, 'peach', 'melon');
  setArray(spliced);
  setResult(spliced.join(', '));
}

const handleIndexOf = function(){
 setResult(array.indexOf(query));

}

const handleIncludes = function(){
  const includesResult = array.includes(query);
    setResult(includesResult.toString());
 
}

const handleFind = function() {
 const findArr = array.find(function(item){
   return item === query;
 });

 if(findArr !== undefined){
  setResult(query);
 } else{
  setResult('Not Found');
 }}

 const handleSome = function (){
  const someResult = array.some((item) => {
    return item === query;
  });
  if(someResult){
    setResult('true');
  } else{
    setResult('false');
  }
  
}
 const handleEvery = function () {
const every = array.every(function(item){
  return item.length >= 4;
})
setResult(every.toString());
}

 const handleSort = function () {
  const sort = array.sort();
  setResult(sort.join(', '));
}

const handleJoin = function () {
  const join = array.join();
  setResult(join);
}
const handleHeart = function (){
  console.log('화이팅');
}
    
  return (
    <div className="style">
      <h1><span className="pink-color">Standard</span>반 배열 <span className="pink-color">API</span> 테스트</h1>
      <input 
      value={query}
      onChange={function(e){
        setQuery(e.target.value);
      }}
      className="input-style"
      />
      <div className="button-box">
        <button className="button-style" onClick={handleForEach}>foreach</button>
        <button className="button-style" onClick={handleFilter}>filter</button>
        <button className="button-style" onClick={handleMap}>map</button>
        <button className="button-style" onClick={handleReduce}>reduce</button>
        <button className="button-style" onClick={handlePush}>push</button>
        <button className="button-style" onClick={handlePop}>pop</button>
        <button className="button-style" onClick={handleSlice}>slice</button>
        <button className="button-style" onClick={handleSplice}>splice</button>
        <button className="button-style" onClick={handleIndexOf}>indexOf</button>
        <button className="button-style" onClick={handleIncludes}>includes</button>
        <button className="button-style" onClick={handleFind}>find</button>
        <button className="button-style" onClick={handleSome}>some</button>
        <button className="button-style" onClick={handleEvery}>every</button>
        <button className="button-style" onClick={handleSort}>sort</button>
        <button className="button-style" onClick={handleJoin}>join</button>
        <button className="button-style" onClick={handleHeart}>🤍</button>
      </div>
      <div className="array-box-style">
        <h3>원본 배열 : </h3>
        <p>{array.join(", ")}</p>
      </div>
      <div className="array-box-style">
        <h3>결과물 : </h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
