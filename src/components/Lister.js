import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//import './Lister.css'; // Import the CSS for Lister component
import Card from "./Card"; // Import the Card component
import ProgressPage from "./ProgressPage"; // Import the ProgressPage component


export default function Lister({
  Checked1,
  Checked2,
  Checked3,
  Checked4,
  Checked5,
  Checked6,
  Checked7,
  Checked8,
  Checked9,
  Checked10,
  Checked11,
  Checked12,
  Checked13,
  count,
  setcount,
}) {
  // Define colors for each card
  const colors = [
   "#FF5733", // Color for Card 1
   "#33FF57", // Color for Card 2
    "#3357FF", // Color for Card 3
    "#FF33A1", // Color for Card 4
    "#FFDA33", // Color for Card 5
    "#33FFF4", // Color for Card 6
    "#FF33B5", // Color for Card 7
    "#B5FF33", // Color for Card 8
    "#FF8833", // Color for Card 9
    "#33FF88", // Color for Card 10
    "#33A1FF", // Color for Card 11
    "#A133FF", // Color for Card 12
    "#FFA133", // Color for Card 13
  ];

  useEffect(() => {
    let counter = 0;
    for (let no = 0; no <= 12; no++) {
      let op = JSON.parse(localStorage.getItem('Checked' + `${no}`));
      if (op != null) {
        op = [...new Set(op)];
        for (let i = 0; i < op.length; i++) {
          if ((op[i] != ',' && op[i] != '/' && op[i] != '"' && op[i] != '[' && op[i] != ']' && (op[i] < 'a' || op[i] > 'z') && op[i] != "\\" && op[i] != '+') || op.length == 3) {
            counter++;
          }
        }
      }
    }
    setcount(counter);
  }, []);

  const containerStyles = {
    height: 20,
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${Math.round((count * 100) / 100)}%`,
    backgroundColor: "#ff9933",
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div>
      <h1 className="text-4xl mt-24 flex justify-center">100 DSA Questions</h1>
      <h3 className="text-4xl mt-3 text-purple-800 align-items-center text-center flex justify-center">
        Crack Product Based Companies Today
      </h3>
      <div className={"lg:ml-52 lg:mr-52 md:ml-52 md:mr-52 ml-24 mr-24 "} style={containerStyles}>
        <div style={fillerStyles}>
        {/* <span style={{ color: 'red', padding: 5, fontWeight: 'bold' }}>{`${count}%`}</span> */}


 
    <div>
      <Link className="pl-2 font-large" to="/progress">
        Dsa tracker
      </Link>
      <span style={{ color: 'red', padding: 5, fontWeight: 'bold' }}>{`${count}%`}</span>
    </div>






        </div>
      </div>

      <div className="flex flex-wrap lg:p-16 md:p-16 lg:m-12 md:m-12 sm:m-4 sm:max-w-sm- mt-12 mb-12 justify-center">
      <Card qno={23} no={"12"} ans={Checked12} Checked={Checked12} name="Array and String" color={colors[0]} />
<Card qno={5} no={"1"} ans={Checked1} Checked={Checked1} name="Greedy" color={colors[1]} />
<Card qno={13} no={"2"} ans={Checked2} Checked={Checked2} name="DP" color={colors[2]} />
<Card qno={7} no={"3"} ans={Checked3} Checked={Checked3} name="Binary Search" color={colors[3]} />
<Card qno={5} no={"4"} ans={Checked4} Checked={Checked4} name="Heaps" color={colors[4]} />
<Card qno={6} no={"5"} ans={Checked5} Checked={Checked5} name="Recursion" color={colors[5]} />
<Card qno={8} no={"6"} ans={Checked6} Checked={Checked6} name="Linked List" color={colors[6]} />
<Card qno={8} no={"7"} ans={Checked7} Checked={Checked7} name="Binary Tree" color={colors[7]} />
<Card qno={6} no={"8"} ans={Checked8} Checked={Checked8} name="Binary Search Tree" color={colors[8]} />
<Card qno={7} no={"9"} ans={Checked9} Checked={Checked9} name="Stack and Queue" color={colors[9]} />
<Card qno={6} no={"10"} ans={Checked10} Checked={Checked10} name="Backtracking" color={colors[10]} />
<Card qno={6} no={"11"} ans={Checked11} Checked={Checked11} name="Graphs" color={colors[11]} />
{/* <Card qno={6} no={"11"} ans={Checked11} Checked={Checked11} name="Graphs" color={colors[11]} /> */}
        {/* Add more Card components as needed */}
      </div>

      <div className="mb-10">
        <div className="flex justify-center">
          <p className="text-slate-600 font-nunito "> LinkedIn : &nbsp;</p>
          <Link
            target="_blank"
            className=" text-blue-700 font-nunito "
            to="https://www.linkedin.com/in/gaurav-lomte-ab881321a/"
          >
            Gaurav Dilip Lomte &nbsp;
          </Link>
          {/* <img
            src="https://th.bing.com/th/id/R.1dde1bbff3a49d9a2d8e3ad315f9f137?rik=hx1P1nWyX7TYaw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fheart-symbol-transparent%2fheart-symbol-transparent-7.png&ehk=tnXY15k5brhD0QZZmipdAq6M64XmIA6XDvtWxc1EXZA%3d&risl=&pid=ImgRaw&r=0"
            className="w-6 h-6"
          /> */}
        </div>
        <div className="flex justify-center">
          DSA era by Gaurav | &nbsp;
          <img
            className="h-6 w-6"
            src="https://th.bing.com/th/id/R.968421ef5d794eb8cb555bb49dff4acd?rik=uxIlq%2bqiSDLTsA&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1061%2f1924%2fproducts%2fStar_Emoji_grande.png%3fv%3d1480481043&ehk=1a3L6akK6vOPWmacDkHduTA1L5brh2me2a3w7ivd%2fHE%3d&risl=&pid=ImgRaw&r=0"
          />
          <Link
            target="_blank"
            className="text-sky-600 "
            to="https://github.com/gaurav-lomte23"
          >
            &nbsp; Github {" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

