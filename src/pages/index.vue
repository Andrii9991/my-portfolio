<template>
  <div></div>
</template>

<script setup lang="ts">
interface IProduct {
  id?: number;
  price: number;
  name: string;
  description: string;
  inStock: boolean;
  data?: [];
}

const { data: products } = await useLazyFetch<IProduct[]>("/api/products", {
  transform: (_products) => _products.data,
});
</script>
