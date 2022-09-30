import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";

class FlastListIteam extends Component {
    render() {
        return (
            <View
                style={{
                    height: 80,
                    width: "100%",
                    backgroundColor:
                        this.props.index % 2 == 0 ? "#FFFFFF" : "#E5E5E5",
                }}
            >
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 0.5 }}>
                        <Image
                            source={this.props.item.images}
                            style={{ height: "100%", width: 74 }}
                        ></Image>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            marginLeft: 15,
                            alignItems: "center",
                            flex: 1,
                        }}
                    >
                        <View style={{}}>
                            <Text style={{}}>{this.props.item.title}</Text>
                            <Text style={{ color: "#E83030" }}>
                                {this.props.item.shopName}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginRight: 20,
                                height: 38,
                                width: 88,
                                backgroundColor: "#F31111",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text style={{ color: "white" }}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default function CustomerAdt() {
    const DATA = [
        {
            id: 1,
            images: require("../assets/ca_nau_lau.png"),
            title: "Ca nấu lẩu mini",
            shopName: "Shop Devang",
        },
        {
            id: 2,
            images: require("../assets/ga_bo_toi.png"),
            title: "1Kg gà bơ tỏi",
            shopName: "Shop TD Food",
        },
        {
            id: 3,
            images: require("../assets/do_choi_dang_mo_hinh.png"),
            title: "Xe cần cẩu đa năng",
            shopName: "Shop Thế giới đồ chơi",
        },
        {
            id: 4,
            images: require("../assets/hieu_long_con_tre.png"),
            title: "Xe cần cẩu đa năng",
            shopName: "Shop Thế giới đồ chơi",
        },
        {
            id: 5,
            images: require("../assets/lanh_dao_gian_don.png"),
            title: "Xe cần cẩu đa năng",
            shopName: "Shop Thế giới đồ chơi",
        },
        {
            id: 6,
            images: require("../assets/ca_nau_lau.png"),
            title: "Xe cần cẩu đa năng",
            shopName: "Shop Thế giới đồ chơi",
        },
    ];
    const renderItem = ({ item, index }) => {
        return <FlastListIteam item={item} index={index}></FlastListIteam>;
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[styles.container, { marginTop: 20 }]}>
                <View
                    style={{
                        height: 42,
                        width: "100%",
                        backgroundColor: "#1BA9FF",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <TouchableOpacity style={{ marginLeft: 19.37 }}>
                        <Image source={require("../assets/back.png")}></Image>
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 15,
                            color: "white",
                            //  marginLeft: 162.93,
                        }}
                    >
                        Chat
                    </Text>
                    <TouchableOpacity style={{ marginRight: 19.37 }}>
                        <Image source={require("../assets/cart.png")}></Image>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 60,
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ marginLeft: 25, marginRight: 25 }}>
                        Bạn có thắc mắc gì với sản phẩm vừa xem. Đừng ngại chat
                        với shop
                    </Text>
                </View>
                <View
                    style={{
                        height: "81%",
                        width: "100%",
                        // backgroundColor: "aqua",
                    }}
                >
                    <FlatList
                        data={DATA}
                        renderItem={({ item, index }) => {
                            return (
                                <FlastListIteam
                                    item={item}
                                    index={index}
                                ></FlastListIteam>
                            );
                        }}
                    ></FlatList>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: 49,
                        backgroundColor: "#1BA9FF",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 10,
                    }}
                >
                    <TouchableOpacity>
                        <Image
                            style={{ height: 26, width: 26 }}
                            source={require("../assets/btnMenu-removebg-preview.png")}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ height: 24, width: 24 }}
                            source={require("../assets/homelistview.png")}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ height: 24, width: 24 }}
                            source={require("../assets/btn3.png")}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
