import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SixWeekCourseScreen = ({ navigation }) => {
  const courses = [
    {
      title: 'Child Minding',
      fees: 'R750',
      purpose: 'To provide basic child and baby care',
      content: [
        'Birth to six-month old baby needs',
        'Seven-month to one-year-old needs',
        'Toddler needs',
        'Educational toys',
      ],
    },
    {
      title: 'Cooking',
      fees: 'R750',
      purpose: 'To prepare and cook nutritious family meals',
      content: [
        'Nutritional requirements for a healthy body',
        'Types of protein, carbohydrates, and vegetables',
        'Planning meals',
        'Preparation and cooking of meals',
      ],
    },
    {
      title: 'Garden Maintenance',
      fees: 'R750',
      purpose: 'To provide basic knowledge of watering, pruning, and planting in a domestic garden',
      content: [
        'Water restrictions and the watering requirements of indigenous and exotic plants',
        'Pruning and propagation of plants',
        'Planting techniques for different plant types',
      ],
    },
  ];

  const handleBookingNavigation = () => {
    // Navigate to booking screen
    navigation.navigate('Booking'); // Change 'Booking' to the actual name of your booking screen if needed
  };

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

      <Text style={styles.subtitle}>Six Week Courses</Text>

      {courses.map((course, index) => (
        <View key={index} style={styles.courseContainer}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.fees}>Fees: {course.fees}</Text>
          <Text style={styles.purpose}>Purpose: {course.purpose}</Text>
          <Text style={styles.contentTitle}>Content:</Text>
          {course.content.map((item, idx) => (
            <Text key={idx} style={styles.contentItem}>• {item}</Text>
          ))}
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={handleBookingNavigation}>
        <Text style={styles.buttonText}>Bookings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

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
    color: '#FFF',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#FFF',
  },
  courseContainer: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  fees: {
    fontSize: 16,
    marginBottom: 5,
  },
  purpose: {
    fontSize: 16,
    marginBottom: 5,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  contentItem: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#D1A343', // Button color
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SixWeekCourseScreen;





