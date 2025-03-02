import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { fetchPaymentHistory,PaymentHistoryItem } from '../../services/api';
import { colors, spacing, commonStyles } from '../../styles/commonStyles';
import Header from '../../components/common/Header';

const PaymentHistoryScreen = () => {
  const [paymentHistory, setPaymentHistory] = useState<PaymentHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPaymentHistory = async () => {
      try {
        const data = await fetchPaymentHistory();
        setPaymentHistory(data);
      } catch (err) {
        console.log(err);
        setError('Failed to load payment history');
      } finally {
        setLoading(false);
      }
    };

    loadPaymentHistory();
  }, []);

  if (loading) {
    return (
      <View style={commonStyles.centeredContent}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={commonStyles.centeredContent}>
        <Text style={commonStyles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={commonStyles.container}>
      <Header title="Payment History" />
      <FlatList
        data={paymentHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={commonStyles.listItem}>
            <Text style={commonStyles.bodyText}>Date: {item.date}</Text>
            <Text style={commonStyles.bodyText}>Amount: ${item.amount}</Text>
            <Text style={commonStyles.bodyText}>Status: {item.status}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PaymentHistoryScreen;
