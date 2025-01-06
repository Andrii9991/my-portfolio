<template>
  <div>
    <div v-for="product in products" :key="product.name">
      <p>
        Name: <strong>{{ product.name }}</strong>
      </p>
      <p>
        Description: <strong>{{ product.description }}</strong>
      </p>
      <p>
        Price: <strong>{{ product.price }}</strong>
      </p>
      <img
        class="w-[250px] h-[250px]"
        src="../assets/img/pngtree-decorative-pattern-windmill-pattern-hand-painted-300-pixel-map-png-image_3805409.jpg"
        alt=""
      />
    </div>
  </div>
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
