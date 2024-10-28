import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

const courses = [
  { id: '1', title: 'Child Minding', fee: 750 },
  { id: '2', title: 'Cooking', fee: 750 },
  { id: '3', title: 'Garden Maintenance', fee: 750 },
  { id: '4', title: 'First Aid', fee: 1500 },
  { id: '5', title: 'Sewing', fee: 1600 },
  { id: '6', title: 'Landscaping', fee: 1500 },
  { id: '7', title: 'Life Skills', fee: 1500 },
];

export default function BookingScreen() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [personalDetails, setPersonalDetails] = useState({ name: '', email: '', phone: '' });

  const handleCourseSelect = (courseId) => {
    setSelectedCourses((prevSelected) => {
      if (prevSelected.includes(courseId)) {
        return prevSelected.filter(id => id !== courseId); // Deselect course
      } else {
        return [...prevSelected, courseId]; // Select course
      }
    });
  };

  const calculateDiscount = () => {
    const courseCount = selectedCourses.length;
    if (courseCount === 1) return 0;
    if (courseCount === 2) return 0.05;
    if (courseCount === 3) return 0.1;
    if (courseCount > 3) return 0.15;
    return 0;
  };

  const handleSubmit = () => {
    if (!personalDetails.name || !personalDetails.email || !personalDetails.phone || selectedCourses.length === 0) {
      Alert.alert('Error', 'Please fill in all fields and select at least one course.');
      return;
    }

    const discount = calculateDiscount();
    const totalFee = selectedCourses.reduce((total, courseId) => {
      const course = courses.find(course => course.id === courseId);
      return total + (course ? course.fee : 0);
    }, 0);

    const discountedTotal = totalFee - (totalFee * discount);
    
    Alert.alert(
      'Booking Summary',
      `Name: ${personalDetails.name}\nEmail: ${personalDetails.email}\nPhone: ${personalDetails.phone}\n\nCourses Selected: ${selectedCourses.map(id => courses.find(course => course.id === id).title).join(', ')}\n\nTotal Fee: R${totalFee.toFixed(2)}\nDiscount: ${discount * 100}%\nTotal After Discount: R${discountedTotal.toFixed(2)}`,
      [{ text: 'OK' }]
    );

    // Here you could also add functionality to save the booking to a database or API
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Course Booking</Text>
      
      {/* Personal Details Form */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={personalDetails.name}
        onChangeText={(text) => setPersonalDetails({ ...personalDetails, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={personalDetails.email}
        onChangeText={(text) => setPersonalDetails({ ...personalDetails, email: text })}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={personalDetails.phone}
        onChangeText={(text) => setPersonalDetails({ ...personalDetails, phone: text })}
        keyboardType="phone-pad"
      />

      {/* Course Selection */}
      <Text style={styles.subtitle}>Select Courses:</Text>
      {courses.map(course => (
        <TouchableOpacity
          key={course.id}
          style={[styles.courseButton, selectedCourses.includes(course.id) && styles.selectedCourse]}
          onPress={() => handleCourseSelect(course.id)}
        >
          <Text style={styles.courseButtonText}>{course.title} - R{course.fee}</Text>
        </TouchableOpacity>
      ))}

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#5B7D5B',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
  },
  courseButton: {
    padding: 15,
    borderColor: '#D1A343',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: '#ffffff',
  },
  selectedCourse: {
    backgroundColor: '#cce5ff', // Light blue for selected course
  },
  courseButtonText: {
    fontSize: 16,
    textAlign: 'center',
  },
  submitButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#D1A343',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
