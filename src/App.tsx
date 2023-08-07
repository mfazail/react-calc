import "./App.css";
import { Box, Button, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineBackspace } from "react-icons/hi2";
const controls = [
    {
        label: "Ac",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "Backspace",
        labelType: "icon",
        icon: HiOutlineBackspace,
    },
    {
        label: "/",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "*",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "7",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "8",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "9",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "-",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "4",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "5",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "6",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "+",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "1",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "2",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "3",
        labelType: "text",
        icon: null,
        cls: "",
    },
    {
        label: "=",
        labelType: "text",
        icon: null,
        cls: "row-span-2 !h-full",
    },
    {
        label: "0",
        labelType: "text",
        icon: null,
        cls: "col-span-2",
    },
    {
        label: ".",
        labelType: "text",
        icon: null,
        cls: "",
    },
];
const act = ["+", "-", "*", "/"];
function App() {
    const handleButtonClick = (label: string) => {
        switch (label) {
            case "0":
                setNum(num + "0");
                break;
            case "1":
                setNum(num + "1");
                break;
            case "2":
                setNum(num + "2");
                break;
            case "3":
                setNum(num + "3");
                break;
            case "4":
                setNum(num + "4");
                break;
            case "5":
                setNum(num + "5");
                break;
            case "6":
                setNum(num + "6");
                break;
            case "7":
                setNum(num + "7");
                break;
            case "8":
                setNum(num + "8");
                break;
            case "9":
                setNum(num + "9");
                break;
            case ".":
                if (num[num.length - 1] != ".") {
                    setNum(num + ".");
                }
                break;
            case "+":
                if (!checkSym()) {
                    setNum(num + "+");
                }
                break;
            case "-":
                if (!checkSym()) {
                    setNum(num + "-");
                }
                break;
            case "*":
                if (!checkSym()) {
                    setNum(num + "*");
                }
                break;
            case "/":
                if (!checkSym()) {
                    setNum(num + "/");
                }
                break;
            case "=":
                setNum(eval(num));
                break;
            case "Enter":
                setNum(eval(num));
                break;
            case "Backspace":
                if (num != "") setNum(num.substring(0, num.length - 1));
                break;
            case "Ac":
                setNum("");
                break;
            default:
                console.log("wrong choice!");
                break;
        }
    };
    const checkSym = () => {
        return act.includes(num[num.length - 1]);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        handleButtonClick(e.key);
    };
    const [num, setNum] = useState("");
    return (
        <>
            <div className="max-w-xl mx-auto" onKeyDown={handleKeyPress} tabIndex={0}>
                <Box w="100%" p={4}>
                    <h1 className="text-right">{num}</h1>
                </Box>
                <div className="grid grid-cols-4 gap-4 items-center justify-center">
                    {controls.map((v) => {
                        return (
                            <Button className={v.cls} onClick={() => handleButtonClick(v.label)} key={v.label}>
                                {v.labelType === "text" ? v.label : <Icon w={5} h={5} as={v.icon} />}
                            </Button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
