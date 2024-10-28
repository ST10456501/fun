
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function SixMonthCoursesScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require('./Logo.jpg')} // Ensure the logo image path is correct
          style={styles.logo}
        />
        <Text style={styles.title}>Empowering the Nation</Text>
      </View>

      <Text style={styles.subtitle}>Six Month Courses</Text>

      {/* Course Details */}
      <View style={styles.courseContainer}>
        <CourseDetails
          title="First Aid"
          fee="R1500"
          purpose="To provide first aid awareness and basic life support"
          content={[
            'Wounds and bleeding',
            'Burns and fractures',
            'Emergency scene management',
            'Cardio-Pulmonary Resuscitation (CPR)',
            'Respiratory distress e.g., Choking, blocked airway',
          ]}
        />
        <CourseDetails
          title="Sewing"
          fee="R1600"
          purpose="To provide alterations and new garment tailoring services"
          content={[
            'Types of stitches',
            'Threading a sewing machine',
            'Sewing buttons, zips, hems and seams',
            'Alterations',
            'Designing and sewing new garments',
          ]}
        />
        <CourseDetails
          title="Landscaping"
          fee="R1500"
          purpose="To provide landscaping services for new and established gardens"
          content={[
            'Indigenous and exotic plants and trees',
            'Fixed structures (fountains, statues, benches, tables, built-in braai)',
            'Balancing of plants and trees in a garden',
            'Aesthetics of plant shapes and colours',
            'Garden layout',
          ]}
        />
        <CourseDetails
          title="Life Skills"
          fee="R1500"
          purpose="To provide skills to navigate basic life necessities"
          content={[
            'Opening a bank account',
            'Basic labour law (know your rights)',
            'Basic reading and writing literacy',
            'Basic numeric literacy',
          ]}
        />
      </View>

      {/* Navigation Button to Booking Screen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Booking')}
      >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const CourseDetails = ({ title, fee, purpose, content }) => (
  <View style={styles.courseDetails}>
    <Text style={styles.courseTitle}>{title}</Text>
    <Text style={styles.courseFee}>Fees: {fee}</Text>
    <Text style={styles.coursePurpose}>Purpose: {purpose}</Text>
    <Text style={styles.courseContentTitle}>Content:</Text>
    {content.map((item, index) => (
      <Text key={index} style={styles.courseContentItem}>
        • {item}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#5B7D5B',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3D6E3D', // Darker green for the title
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  courseContainer: {
    marginBottom: 20,
  },
  courseDetails: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    elevation: 2, // Shadow effect
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseFee: {
    fontSize: 16,
    marginBottom: 5,
  },
  coursePurpose: {
    fontSize: 16,
    marginBottom: 5,
  },
  courseContentTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseContentItem: {
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#D1A343',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
