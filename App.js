import { StatusBar } from "expo-status-bar";
import { Image, SectionList, StyleSheet, Text, View, FlatList } from "react-native";
import Background from "./components/Background";
import CategoryCards from "./components/CategoryCards";
import TaskSections from "./components/SectionList";
import SearchWithHam from "./components/SearchWithHam";

const App = () => {
  // Sample data for FlatList and SectionList
  const flatListData = [
    { id: '1', category: 'Task 1', image: require('./assets/girlLearning.png'), description: '12 tasks left' },
    { id: '2', category: 'Task 2', image: require('./assets/Research.png'), description: '12 tasks left' },
    { id: '3', category: 'Task 3', image: require('./assets/aiHead.png'), description: '12 tasks left' },
    { id: '4', category: 'Task 4', image: require('./assets/developers_64dp.png'), description: '12 tasks left' },
    { id: '5', category: 'Task 5', image: require('./assets/phone.png'), description: '12 tasks left' },
    { id: '6', category: 'Task 6', image: require('./assets/phone.png'), description: '12 tasks left' },
    { id: '7', category: 'Task 7', image: require('./assets/phone.png'), description: '12 tasks left' },
    { id: '8', category: 'Task 8', image: require('./assets/phone.png'), description: '12 tasks left' },
    { id: '9', category: 'Task 9', image: require('./assets/phone.png'), description: '12 tasks left' },
    { id: '10', category: 'Task 10', image: require('./assets/phone.png'), description: '12 tasks left' },
    { id: '11', category: 'Task 11', image: require('./assets/phone.png'), description: '12 tasks left' },
    { id: '12', category: 'Task 12', image: require('./assets/phone.png'), description: '12 tasks left' },
  ];

  const sectionListData = [
  
      { id: '1', title: "Web Development" },
      { id: '2', title: "Data Analytics" },
      { id: '3', title: "AI Essentials" },
      { id: '4', title: "Cloud Computing" },
      { id: '5', title: "Cybersecurity" },
      { id: '6', title: "Mobile App Development" },
      { id: '7', title: "DevOps" },
      { id: '8', title: "Blockchain Technology" },
      { id: '9', title: "Internet of Things (IoT)" },
      { id: '10', title: "Software Engineering" },
      { id: '11', title: "Database Management" },
      { id: '12', title: "Network Administration" },
      { id: '13', title: "Machine Learning" },
      { id: '14', title: "IT Project Management" },
      { id: '15', title: "Big Data" },
      { id: '16', title: "UI/UX Design" }
   
  ];

  const renderCategories = ({ item }) => (
    <CategoryCards category={item.category} image={item.image} description={item.description} />
  );

  const renderTaskSections = ({ item }) => (
      <TaskSections task={item.title} />
  );


  return (
    <View style={{flex:1}}>
      <Background>
        {/* Hello dev and user image */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.helloText}>Hello, Devs</Text>
            <Text style={styles.taskText}>14 tasks today</Text>
          </View>
          <View>
            <Image 
              style={styles.image}
              source={require('./assets/user.png')}
            />
          </View>
        </View>

        <SearchWithHam/>

        <View style={styles.contentContainer}>
          <Text style={styles.categoryText}>Categories</Text>  
         <FlatList
            horizontal
            data={flatListData}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContentContainer}
          />
          <Text style={styles.categoryText}>Ongoing Task</Text>

          <FlatList
            data={sectionListData}
            renderItem={renderTaskSections}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            style={styles.sectionList}
          />
        </View>
        
        <StatusBar style="auto" />
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 8,
  },
  headerText: {
    flex: 1,
  },
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily:''
  },
  taskText: {
    fontSize: 16,
    color: 'gray',
    fontFamily:'monospace'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    paddingHorizontal: 8,
  },
  categoryText: {
    fontSize: 20,
    color:'#0e3d96',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  flatListContentContainer: {
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: '#f9c2ff',
    marginVertical: 5,
  },
  sectionList: {
    minHeight: 500,
  },
 
});

export default App;
