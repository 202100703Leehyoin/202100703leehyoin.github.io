.calculator {
  width: 300px;
  margin: 50px auto;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
}

.screen {
  grid-column: 1 / -1;
  height: 40px;
  font-size: 24px;
  text-align: right;
  padding: 5px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background-color: #f7f7f7;
}

.btn {
  height: 50px;
  font-size: 24px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover {
  background-color: #333;
  color: #fff;
}
