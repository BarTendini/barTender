import {Image} from "react-native";
import commonStyles from "../styles/CommonStyles";

const BarSelection = (Bar) => {
    return (
        <Image
            source={getImage(Bar.Bar)}
            style={commonStyles.RistoranteImm}
        />
    );
};

export default BarSelection;

const getImage = (bar) => {
    switch (bar.rist) {
        case 0: {
            return require("../image/ristoranti/DaPino.png")
        }
        case 1: {
            return require("../image/ristoranti/daDino.png")
        }
        case 2: {
            return require("../image/ristoranti/daGino.png")
        } default: {
            return require("../image/ristoranti/DaPino.png")
        }
    }
}
