CREATE TABLE t_p9788778_nova_vision_initiati.orders (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  meat_type VARCHAR(100) NOT NULL,
  portions INTEGER NOT NULL DEFAULT 1,
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);