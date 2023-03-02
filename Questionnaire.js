import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

function Questionnaire() {
  const [shop, setShop] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [age, setAge] = React.useState("");
  const [favBook, setFavBook] = React.useState("");
  const [favSong, setFavSong] = React.useState("");
  const [favMovie, setFavMovie] = React.useState("");
  const [help, setHelp] = React.useState("");
  const [assortment, setAssortment] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [want, setWant] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleChangeShop = (e) => {
    setShop(e.target.value);
  };
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const sendFavBook = (e) => {
    setFavBook(e.target.value);
  };

  const sendFavSong = (e) => {
    setFavSong(e.target.value);
  };

  const sendFavMovie = (e) => {
    setFavMovie(e.target.value);
  };

  const sendWant = (e) => {
    setWant(e.target.value);
  };

  const handleChangeAssortment = (e) => {
    setAssortment(e.target.value);
  };

  const handleChangeDisplay = (e) => {
    setDisplay(e.target.value);
  };

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeHelp = (e) => {
    setHelp(e.target.value);
  };

  const sendMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleChange = () => {
    if (shop === "井ノ宮北店") {
      db.collection("answers")
        .doc("InomiyaKita")
        .collection("InomiyaKitaAnswers")
        .add({
          shop: shop,
          gender: gender,
          age: age,
          favoriteBook: favBook,
          favoriteSong: favSong,
          favoriteMovie: favMovie,
          want: want,
          help: help,
          assortment: assortment,
          display: display,
          message: message,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    } else if (shop === "天馬店") {
      db.collection("answers").doc("Temma").collection("TemmaAnswers").add({
        shop: shop,
        gender: gender,
        age: age,
        favoriteBook: favBook,
        favoriteSong: favSong,
        favoriteMovie: favMovie,
        want: want,
        help: help,
        assortment: assortment,
        display: display,
        message: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } else if (shop === "大里東店") {
      db.collection("answers")
        .doc("OzatoHigashi")
        .collection("OzatoHigashiAnswers")
        .add({
          shop: shop,
          gender: gender,
          age: age,
          favoriteBook: favBook,
          favoriteSong: favSong,
          favoriteMovie: favMovie,
          want: want,
          help: help,
          assortment: assortment,
          display: display,
          message: message,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
    }

    setShop("");
    setGender("");
    setAge("");
    setHelp("");
    setMessage("");
    setFavBook("");
    setAssortment("");
    setDisplay("");
    setFavSong("");
    setFavMovie("");
    setWant("");
  };

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="shop">ご利用店舗</FormLabel>
        <Select
          labelId="shop"
          id="shopSelect"
          value={shop}
          onChange={handleChangeShop}
        >
          <MenuItem value="天馬店">天馬店</MenuItem>
          <MenuItem value="井ノ宮北店">井ノ宮北店</MenuItem>
          <MenuItem value="大里東店">大里東店</MenuItem>
        </Select>
        <FormLabel component="legend">性別</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="gender1"
          value={gender}
          onChange={handleChangeGender}
        >
          <FormControlLabel value="female" control={<Radio />} label="女性" />
          <FormControlLabel value="male" control={<Radio />} label="男性" />
          <FormControlLabel value="other" control={<Radio />} label="その他" />
        </RadioGroup>
        <FormLabel component="gender">年齢</FormLabel>
        <Select
          labelId="age"
          id="ageSelect"
          value={age}
          onChange={handleChangeAge}
        >
          <MenuItem value="lessThan19">～１９</MenuItem>
          <MenuItem value="20">２０代</MenuItem>
          <MenuItem value="30">３０代</MenuItem>
          <MenuItem value="40">４０代</MenuItem>
          <MenuItem value="50">５０代</MenuItem>
          <MenuItem value="moreThan60">６０～</MenuItem>
        </Select>
        <FormLabel component="legend">お気に入りの本はありますか</FormLabel>
        <TextField
          id="outlined-required"
          placeholder="書籍名"
          type="text"
          onChange={sendFavBook}
          value={favBook}
        />
        <FormLabel component="legend">お気に入りの曲はありますか</FormLabel>
        <TextField
          id="outlined-required"
          placeholder="曲名"
          type="text"
          onChange={sendFavSong}
          value={favSong}
        />
        <FormLabel component="legend">お気に入りの映画はありますか</FormLabel>
        <TextField
          id="outlined-required"
          placeholder="映画名"
          type="text"
          onChange={sendFavMovie}
          value={favMovie}
        />
        <FormLabel component="legend">
          取り寄せてほしい商品はありますか
        </FormLabel>
        <TextField
          id="outlined-required"
          placeholder="書籍名・ＤＶＤ名・ＣＤ名"
          type="text"
          onChange={sendWant}
          value={want}
        />
        <FormLabel component="legend">店員の対応はいかがでしたか</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="gender1"
          value={help}
          onChange={handleChangeHelp}
        >
          <FormControlLabel value="1" control={<Radio />} label="１（不満）" />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="２（やや不満）"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="３（どちらでもない）"
          />
          <FormControlLabel
            value="4"
            control={<Radio />}
            label="４（やや満足）"
          />
          <FormControlLabel value="5" control={<Radio />} label="５（満足）" />
        </RadioGroup>
        <FormLabel component="legend">店内の品揃えはいかがでしたか</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="gender1"
          value={assortment}
          onChange={handleChangeAssortment}
        >
          <FormControlLabel value="1" control={<Radio />} label="１（不満）" />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="２（やや不満）"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="３（どちらでもない）"
          />
          <FormControlLabel
            value="4"
            control={<Radio />}
            label="４（やや満足）"
          />
          <FormControlLabel value="5" control={<Radio />} label="５（満足）" />
        </RadioGroup>
        <FormLabel component="legend">店内の陳列はいかがでしたか</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="gender1"
          value={display}
          onChange={handleChangeDisplay}
        >
          <FormControlLabel value="1" control={<Radio />} label="１（不満）" />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="２（やや不満）"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="３（どちらでもない）"
          />
          <FormControlLabel
            value="4"
            control={<Radio />}
            label="４（やや満足）"
          />
          <FormControlLabel value="5" control={<Radio />} label="５（満足）" />
        </RadioGroup>
        <FormLabel component="legend">お客様の声をお聞かせください。</FormLabel>

        <TextField
          placeholder="ご意見・ご要望など"
          type="text"
          onChange={sendMessage}
          value={message}
        />
        <Button onClick={handleChange}>送信</Button>
      </FormControl>
    </div>
  );
}

export default Questionnaire;
