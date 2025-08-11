import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    marginBottom: 8,
    borderRadius: 6,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tableRow: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  logoColumn: {
    flex: 0.2,
    alignItems: 'center',
  },
  textColumn: {
    flex: 0.3,
    paddingHorizontal: 8,
  },
  detailsColumn: {
    flex: 0.5,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  tagline: {
    fontSize: 12,
    color: '#666',
  },
  description: {
    fontSize: 12,
    color: '#444',
    lineHeight: 16,
  },
});