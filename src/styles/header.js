import { StyleSheet } from "react-native";

const head = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        backgroundColor: "#d9d5d0",
        height: 60,
        alignItems: "flex-start",
        alignContent: "space-between",
        columnGap: 20,
        paddingHorizontal: 5,
        paddingTop: 5,marginTop:5
    },
    headLogo: {
        width: 40, height: 40, borderRadius: 25, right: 5
    }
    , headerTextView1: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#f78205",
        columnGap: 8,
        height: 45,
        padding: 10,
        textAlign: "center",
        alignSelf: "center",
        alignContent: "space-evenly",
        borderColor: "black",
        borderStyle: "dotted",
        borderWidth: 2.0,
        borderRadius: 10,
        marginBottom: 10,
    



    }
});
export default head;
