import { StatusBar } from "expo-status-bar";
import { Image, SectionList, StyleSheet, Text, View, FlatList } from "react-native";
import Background from "./components/Background";
import CategoryCards from "./components/CategoryCards";
import TaskSections from "./components/SectionList";
import SearchWithHam from "./components/SearchWithHam";

const App = () => {
  // Sample data for FlatList and SectionList
  const flatListData = [
    { id: '8', category: 'study', image: require('./assets/girlLearning.png'), description: '12 tasks left' },
    { id: '4', category: 'write code', image: require('./assets/developers_64dp.png'), description: '12 tasks left' },
    { id: '1', category: 'Sing', image: require('./assets/sing.png'), description: '12 tasks left' },
    { id: '2', category: 'Research', image: require('./assets/Research.png'), description: '12 tasks left' },
    { id: '3', category: 'Brainstorm', image: require('./assets/aiHead.png'), description: '12 tasks left' },
    { id: '5', category: 'Contact', image: require('./assets/phone.png'), description: '12 tasks left' },
    { id: '6', category: 'Read', image: require('./assets/read.png'), description: '12 tasks left' },
    { id: '7', category: 'Practice Guitar', image: require('./assets/guitar.png'), description: '12 tasks left' },

  ];

  const sectionListData = [
  
    { id: '1', title: "Web Development", iconName: 'globe' },
    { id: '2', title: "Data Analytics", iconName: 'bar-chart' },
    { id: '3', title: "AI Essentials", iconName: 'book' },
    { id: '4', title: "Cloud Computing", iconName: 'cloud' },
    { id: '5', title: "Cybersecurity", iconName: 'shield' },
    { id: '6', title: "Mobile App Development", iconName: 'mobile' },
    { id: '7', title: "DevOps", iconName: 'gears' },
    { id: '8', title: "Blockchain Technology", iconName: 'chain' },
    { id: '9', title: "Internet of Things (IoT)", iconName: 'wifi' },
    { id: '10', title: "Software Engineering", iconName: 'code' },
    { id: '11', title: "Database Management", iconName: 'database' },
    { id: '12', title: "Network Administration", iconName: 'sitemap' },
    { id: '13', title: "Machine Learning", iconName: '' },
    { id: '14', title: "IT Project Management", iconName: 'tasks' },
    { id: '15', title: "Big Data", iconName: 'server' },
    { id: '16', title: "UI/UX Design", iconName: 'pencil' }
   
  ];

  const renderCategories = ({ item }) => (
    <CategoryCards category={item.category} image={item.image} description={item.description} icon={item.iconName}/>
  );

  const renderTaskSections = ({ item }) => (
      <TaskSections task={item.title} icon={item.iconName}/>
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
    paddingTop:20
  },
  headerText: {
    flex: 1,
    color:'#0d0303'
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
    // borderRadius: 25,
  },
  contentContainer: {
    paddingHorizontal: 8,
  },
  categoryText: {
    fontSize: 20,
    color:'',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  flatListContentContainer: {
    height: 300,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius:16,
    
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
