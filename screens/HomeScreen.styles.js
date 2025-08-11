import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff5f0",
    paddingHorizontal: 15,
    paddingTop: 20,
  },

  tableHeader: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#0b8585ff",
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#0b8585ff",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
  },

  headerText: {
    flex: 1,
    fontWeight: "800",
    fontSize: 16,
    color: "#ecececff",
    textAlign: "center",
  },

  listContent: {
    paddingBottom: 40,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,
    shadowColor: "#fcb69f",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 6,
    elevation: 4,
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoColumn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#034b3fff",
  },

  textColumn: {
    flex: 2,
    paddingHorizontal: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#044d40ff",
    marginBottom: 2,
  },

  tagline: {
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "italic",
    color: "#044238ff",
  },

  detailsColumn: {
    flex: 4,           // increased flex to give more room
    paddingLeft: 15,   // added padding for breathing space
  },

  description: {
    fontSize: 14,
    color: "#033028ff",
  },
});
