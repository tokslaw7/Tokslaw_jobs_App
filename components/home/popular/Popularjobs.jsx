import { useState } from 'react'
import {View, Text, TouchableOpacity, FlatList, ActivityIndicator, ActivityIndicatorComponent} from 'react-native'

import styles from './popularjobs.style'
import  { COLORS, SIZES} from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import {useRouter} from "expo-router";

const Popularjobs = () => {
    const router = useRouter();
    const isLoading = false;
    const error = false;

  return (
    <View style={styles.container}>
        <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular jobs ok</Text>
            <TouchableOpacity>
                <Text style={styles.headerBtn}>Show all</Text>
            </TouchableOpacity>
    </View>
        <View style={styles.cardsContainer}>
            {isLoading ? (
                <ActivityIndicator size="large" colors={ COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                <FlatList
                data={[1,2,3,4,5]}
                renderItem={({ item }) =>(
                    <PopularJobCard
                        item={ item }
                    />
                )}
                keyExtractor={item => item?.job_id}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                />
            )}
        </View>
    </View>
  )
}

export default Popularjobs
