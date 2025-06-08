import React, { useRef } from "react";
import { Animated, Dimensions, StyleSheet, Text } from "react-native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = 120;
const SPACING = 20;
const CENTER_OFFSET = (width - ITEM_WIDTH) / 2;

const data = Array.from({ length: 10 }, (_, i) => ({
	id: i,
	label: `Item ${i + 1}`,
}));

const HorizontalCarousel = () => {
	const scrollX = useRef(new Animated.Value(0)).current;

	return (
		<Animated.FlatList
			data={data}
			horizontal
			keyExtractor={(item) => item.id.toString()}
			contentContainerStyle={{ paddingHorizontal: CENTER_OFFSET }}
			showsHorizontalScrollIndicator={false}
			snapToInterval={ITEM_WIDTH + SPACING}
			decelerationRate="fast"
			onScroll={Animated.event(
				[{ nativeEvent: { contentOffset: { x: scrollX } } }],
				{ useNativeDriver: true }
			)}
			renderItem={({ item, index }) => {
				const inputRange = [
					(index - 1) * (ITEM_WIDTH + SPACING),
					index * (ITEM_WIDTH + SPACING),
					(index + 1) * (ITEM_WIDTH + SPACING),
				];

				const scale = scrollX.interpolate({
					inputRange,
					outputRange: [0.9, 1.2, 0.9],
					extrapolate: "clamp",
				});

				return (
					<Animated.View style={[styles.item, { transform: [{ scale }] }]}>
						<Text style={styles.label}>{item.label}</Text>
					</Animated.View>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	item: {
		width: ITEM_WIDTH,
		height: 150,
		marginRight: SPACING,
		borderRadius: 16,
		backgroundColor: "#ff7675",
		alignItems: "center",
		justifyContent: "center",
	},
	label: {
		color: "#fff",
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default HorizontalCarousel;
